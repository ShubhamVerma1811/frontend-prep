class UberDriver {}

const x = new UberDriver()
	.pick("TestUser")
	.pick("Rahul")
	.drive(2)
	.drop("Rahul")
	.drive(4)
	.drop("TestUser")
	.rest(10)
	.pick("Kumar")
	.drive(4)
	.drop("Kumar");

x.pick("BABBY").drive(4).drop("BABBY").rest(10);

// Output:
// Hello uber driver is online
// User TestUser is picked
// User Rahul is picked
// Driver is driving     <-- wait 2 seconds
// Drop Rahul
// Driver is driving     <-- wait 4 seconds
// Drop TestUser
// Driver is in offline mode <-- wait 10 seconds

export default {};
