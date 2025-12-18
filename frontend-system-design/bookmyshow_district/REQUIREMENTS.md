<!-- TODO:: WIP -->

# Overview

Build frontend system design for event booking platform like BookMyShow, District, Ticketmaster.

## Keywords

Browse, Movies, Events, Activies, Venue, Seats, SeatMap, Booking Seats, Search, Checkout, Filter, Sort, Concurrency

## Functional Requirements

User should be able to:

1. **Browse**

- Movies
- Events
- Activities

2. **Search**

- Search by entities and venues
- Search bar can have typeahead suggestions
- Lists name, image, desc, type and have slug

3. **Filtering and Sort**

- Filter by
  - Pricing
  - Formats
  - Languges
  - Time
- Sort by
  - Price
  - Popularity

4. **Movie and Movie Detail**

Movie should show

- Name
- Desc
- Images
- Cast
  - Name, Char name, image, desc
- Languages
- Genre
- Formats
- Runtime
- Rating

Movie Detail page should have

- Above data and
- List of Venue and Show times for them
  - Venue name, language, format for that venue
  - timings and price of each show time
  - avaialibility status for each show time
  - areas (balacy, upper balancony) for each show time with their won pricing

5. **Seating and SeatMap**

- Cinema hall layout with seats
- seating would be divided into areas of the hall, with their own pricing and name
- seats ranging from rows A - Z and every row contain seat number
- seat status could be `available, sold, selected`
- seats can only have icons like wheelchair based on their status
- seatmap would also show accurate gaps in the seats

6. **Booking**

- User can select mutliple seats up to configured max limit, if any
- once the user proceed to booking the current seats, FE would send a lock request to BE
- this would lock the seats for X mins, any other user trying to book these seats would be provieded with an error
- once the lock expires and the booking is not made, the seats are released and avaialble to book again.

7. **Venue**

- The venue page would contain

  - venue info, liek name, address, amenities
  - list of events/movies shown their with group of show times and pricing in case of movies

- View list of movies, events, activities
- View details of movies, events, activities
- on details page, be able to see the show times of movie for their city
- select a cinema hall for a particular time and formats
- be able to select seats for that movie and proceed to checkout

## Non Functional Requirements

System should be able to:

- A11y with write aria labels
- Performant for handling seat booking
-

References

- https://frontendpatterns.dev/error-handling/
