# Task for Backend Position

It should take you between 3 and 5 hours depending on your experience. We made this task in a way that you'll end up learing how IVRs and Twilio's API works. The test is designed to check if you can integrate and sync data between two apps.

First time freelancers looking to build their profiles are encouraged to apply. You need to submit this within 18 hours, you'll be paid after your task completion and code review. You'll be paid your hourly rate x 5 hours.

If you're not able to submit it in 48 hours and your task doesn't do the required functionality then we'll cancel the contract.

## Summary

The purpose of the test is to reproduce one small feature: __call forwarding__.

Here is the story:

Your company has one main number. This number is an [IVR](https://en.wikipedia.org/wiki/Interactive_voice_response):
- If the caller presses `1`, call is forwarded to another phone number;
- If the caller presses `2`, he is able to leave a voicemail.

It's 9AM in the office and first calls are coming in!

## Instructions

### Code

In order to receive and route calls, you will be creating an interaction with [Twilio](https://twilio.com)'s API.

Please keep the following points in mind:

- The focus of this test is the interaction between your backend server and Twilio - only inbound calls should be handled;
- In order to test the interaction between Twilio and your local environment, you can use tunnels like [ngrok.com](https://ngrok.com);
- Register a test account on [Twilio](https://twilio.com) - you'll be able to setup a new account and test phone number for free;
- You can add all the models you need specially for Call object;
- Your project must be available online. A simple Heroku Dyno should do the trick;
- Make your code as clear as possible, it should be understandable at a first glance (comments are more than welcome);
- You can dd tests in your submission, we'll give you bonus if we like your approach.

### Required

- Use Typescript
- Use NestJS - follow best Nest practices
- Store the call logs model/table in two different databases :
    1. Non-Relational Database - MongoDB
    2. Relational Database - Supabase

### Use case

The use case we want to reproduce is the following:

- A customer is calling the main number of your company;
- If the caller presses `1`, the call is redirected on your personal phone\*. You should be able to pickup and talk with the caller.
- If the caller presses `2`, he can drop a voicemail (you would like to hear this message later);
- The call has to be logged in the database;
- An activity feed, listing all calls, should be displayed: status of the call, duration, link to an audio file if the caller dropped a voicemail plus other info you have in mind.

### Main steps

Here are some steps to help you start:

- [ ] Create a Twilio account and read carefully the API doc.

- [ ] Get a Free Number on Twilio and try to call it.

- [ ] Create an `Application` and Twilio tools you will use for calls.

- [ ] Create the `Call` model in order to store data about calls.

- [ ] Forward incoming calls according to the previous strategies.


## Code Submit
Please organize, design, test and document your code as if it were going into production, create a loom video with your PR.

We will review it and get back to you in order to talk about your code! If we don't get back to you in 72 hours then let us know.

All the best and happy coding. 
