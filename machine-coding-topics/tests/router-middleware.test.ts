import { describe, expect, test } from "vitest";
import { createRouterMiddleware } from "../current/router-middleware";

describe("Router middleware test suite", () => {
	test("returns value for exact path match", () => {
		const router = createRouterMiddleware();
		router.addRoute("/bar", "result");
		expect(router.callRoute("/bar")).toBe("result");
		expect(router.callRoute("/baz")).toBeNull();
	});

	test("matches wildcard patterns with single segment", () => {
		const router = createRouterMiddleware();
		router.addRoute("/bar/*/baz", "bar");
		expect(router.callRoute("/bar/a/baz")).toBe("bar");
		expect(router.callRoute("/bar/x/y/baz")).toBeNull();
	});

	test("matches wildcard patterns with nested segments", () => {
		const router = createRouterMiddleware();
		router.addRoute("/bar/*", "wildcard");
		expect(router.callRoute("/bar/a/baz")).toBe("wildcard");
		expect(router.callRoute("/bar/anything")).toBe("wildcard");
	});

	test("gives priority to exact match over wildcard", () => {
		const router = createRouterMiddleware();
		router.addRoute("/foo/baz", "foo");
		router.addRoute("/foo/*", "bar");
		expect(router.callRoute("/foo/baz")).toBe("foo");
		expect(router.callRoute("/foo/bar")).toBe("bar");
	});

	test("uses first matching wildcard route when multiple could match (registration order)", () => {
		const router = createRouterMiddleware();
		router.addRoute("/foo/*", "first");
		router.addRoute("/foo/*/baz", "second");
		expect(router.callRoute("/foo/bar")).toBe("first");
		expect(router.callRoute("/foo/x/baz")).toBe("first");
	});

	test("wildcard registration order reversed still respects first-registered", () => {
		const router = createRouterMiddleware();
		router.addRoute("/foo/*/baz", "later");
		router.addRoute("/foo/*", "earlier");
		expect(router.callRoute("/foo/x/baz")).toBe("later");
	});

	test("no matching route returns null", () => {
		const router = createRouterMiddleware();
		router.addRoute("/foo", "foo");
		expect(router.callRoute("/bar")).toBeNull();
		expect(router.callRoute("/")).toBeNull();
	});

	test("multiple wildcards competing for same path picks first registered", () => {
		const router = createRouterMiddleware();
		router.addRoute("/api/v1/*", "v1");
		router.addRoute("/api/*", "api");
		router.addRoute("/api/v1/users/*", "users");
		expect(router.callRoute("/api/v1/users/123")).toBe("v1");
	});

	test("exact match wins even when registered after wildcard", () => {
		const router = createRouterMiddleware();
		router.addRoute("/posts/*", "posts");
		router.addRoute("/posts/123", "specific-post");
		expect(router.callRoute("/posts/123")).toBe("specific-post");
		expect(router.callRoute("/posts/456")).toBe("posts");
	});

	test("handles paths with multiple wildcard segments", () => {
		const router = createRouterMiddleware();
		router.addRoute("/users/*/posts/*", "user-posts");
		expect(router.callRoute("/users/abc/posts/123")).toBe("user-posts");
		expect(router.callRoute("/users/john/posts/def/ghi")).toBeNull();
	});

	test("root path and simple paths work correctly", () => {
		const router = createRouterMiddleware();
		router.addRoute("/", "root");
		router.addRoute("/home", "home");
		expect(router.callRoute("/")).toBe("root");
		expect(router.callRoute("/home")).toBe("home");
		expect(router.callRoute("/home/")).toBeNull();
	});
});
