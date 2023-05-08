/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

const fullName= "Ahmad Musllam";
const yearOfBirth= "1999";
let hobby = "Football";
let funFact= "Nothing";

const image= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8APAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADQQAAICAQEFAwoGAwAAAAAAAAABAgMEEQUSITFBE2GSBhQWIlFUYnFykUKBocHR4SMyUv/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQEDBgL/xAAyEQACAgECAggFAgcAAAAAAAAAAQIDEQQhEjEFExVBUXGh4VJhYpHBItEGFCMyQoGx/9oADAMBAAIRAxEAPwD4aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAemdgBsANgBsANgeGAAAAAAAAAAAAAAAAAD1RcmlFNt9EDKWeR1R2bmyjvLEua+hkhaTUNZVb+zN60l7WeBnPZXOuTjZCUJLpJaM0NOLwzTKEoPElgwMHkAAAAHsYuUkorVt6JGUs8jKWS6bI2VXgVKdiUshr1pf89yO16N6Mhpoqc1mf8AzyOi0mkjRHMv7juququq7WualB/iXcWcLIWR44PKJELITjxxexoyMfF2pirf0nCS1hOPNfIiajS0a6rL38GjxOFWqr35PkUrNxbMPJnRb/tF811XRnD6iiVFjrnzRzd1Tqm4S7jQaTWAAAdmx4Ke08aMuXaJ/YmdHwU9VWn4o36VJ3RT8S6+cVzyZYz139ze5cNOR3fXQdvU/wCWM/6Oj62MrHW+eDHDxK8XEWNBylBa8Xzepr02ljp6FSnlb+piqmNdfVx5Guvsdm4+PjazknLcjw1bfM81KvR1Qqz8l5nhOGmjGsgfK2KWdVLq6+P3Zzn8QQSvjJd6/JV9KL+qvIgihK0AAA241vYZFdqWrhJS0+TNlVjrsjNdzyeoS4JKS7i7WVVbQpqyaLZQmlrXbDmu5/wdzKuGshG+qWJdz/DX4OjcYamCnF4fc0Y6bUS3VLEl8TUk/sM69bYi/nlr0x+RjVLbiX29zLHw3G7znLt7W5L1eGkYLuX7nuvTT41bfLMly7kvL9zNdHDLrLHl+iKptzLWZtCc4PWEfVh8kcj0rqVqNS3HktkUWru665yXIjytIwAAAAOzA2lk4M9aZ+r1hLjFk7R9IXaR/oe3h3G6nUWUvMGS68qJaccWOv1/0XK/iLbevfz9if2pL4UR2ftnLy04OSrrf4IcNfzK3V9MajUJxX6Y/L9yJdrLbtm9vAjSqIoAAAANuNj2ZNqrqjrJ/obKqpWy4Yrc911yslwxLJhbGx6EpXx7WzrryOg03RdUN7N36FxToq4by3Z3dhTpoqa9PYoon/y9OMcK+xK4I8sHLk7IxL4vSCrl0cFoRLujaJrZYfyI9ukqn3YK7n4NuFbu2cY9JLkyg1Olnp5YkVN9EqZYZyEY0AA9XMAtWxsSOLjKTX+SfFv2HUdH6ZU18T5svNJSq4Z72SGpPySxqMgNjINGZjwyceVc0nw4P2M0aimN1bizVdWrIOLKdbXKqyUJc4vQ5KyDhJxfcc9JOLwzA8GDKuW5OMmtdHroeoNRkmzKeHkl15QWJJebw4fEy4XTGFjg9fYn9oT8Ee+kFnu8PEzPbH0evsO0J+CHpDZ7vDxMdsfR6+xntGfwj0gs93h4mY7Y+j19jHaEvhQ9IbPd4+Jjtj6PX2HaEvhRGZmR51fK3cUHLomVmouV1jmlgh22dZJywaDQawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==";



/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */
const fullNameString=`My name is ${fullName}`;
const yearOfBirthString= `I am ${2023-yearOfBirth}`;
const hobbyString = "My hobby is "+`${hobby}`




// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars++;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars--;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars=stars+2;

}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars=stars-2;

}
