# Brief
I have been asked to create a Simple CRUD application that encapsulates all core modules covered during the training. I have chosen to create a website where an user can create, read, view and update listings/adverts about their stolen or lost cars.

From project planning, everything about my project is shown below

## My approach

Users can create listings about their stolen car which will include details such as 

* Car make and model 
* year
* colour 
* transmission
* contact details 
* description

These details will be displayed on the same page. A seperate page is available to change or delete these listings.

## Architecture

Below is an image of the architecture diagram i have used:

![architecture] (https://drive.google.com/file/d/1gHOgVjkV5A1Veb39vVAfpMjN3SlNZ6ZI/view?usp=sharing)

# Project planning and sketches

Before starting my project, I created some rough sketches that will give me a plan of what that is I need to be creating. Although the final outcome is not completely what I had in my sketches, it still helped me to create most of it.

![sketches] (https://drive.google.com/file/d/1-LfGLtIA8jnWkK8SqpbOSUy14-j2Waaf/view?usp=sharing)

# Jira Board

Below is an image of my Jira board. This was designed at the beginning which was helpful to indicate what needs to be done. Once a certain task has been completed, i could then move them on to the "done" section. This helps you clearly organise what needs to be done for the website.

![Jira board] (https://drive.google.com/file/d/1tNxPWtm37gS2HZ5KbdKznGfgLDv_eoXR/view?usp=sharing)

# Risk Assesment

The risk assessment for this project can be found in full here:

[Risk Assesment](https://drive.google.com/file/d/1s0OcRk7yzXjWzevgUI6Osejn1GqBKP4J/view?usp=sharing)

Here's a quick screenshot:

![Risk Assesment] (https://drive.google.com/file/d/1HrqhtBTHbNbsUzEg7960nzCUxa7UVK-f/view?usp=sharing)

# Testing

JUnit and Mockito was used to test the codes. These tests were helpful in telling me if the code does what it is meant to do. By passing in data and matching with the expected data, I can be sure that my code is working. 

Below shows a screenshot of my test coverage:

![Coverage] (https://drive.google.com/file/d/1q7Bi5TKaJdAzk3395Q-viyFXsvQZJo4H/view?usp=sharing)

# Front end

Below shows some screenshots of my front end. There are 3 pages in total and i will briefly desribe what each does below.

![homepage] (https://drive.google.com/file/d/1qjF9wCjEalggQiuDYQaHUv51C81hyRHE/view?usp=sharing)

This is my homepage which describe what the website does and how to use the website with screenshots. This will help people create a listing without any confusions.

![create a lsiting] (https://drive.google.com/file/d/1xipAvdm0fca1esiYBVXf4VpoeD7Wi_qR/view?usp=sharing)

This is where a user can go to create a listing of their car. As you can see, there are input fields which takes in details of the car. Once the "create" button is pressed, the listing will automatically appear at the bottom of the page.

![manage listing] (https://drive.google.com/file/d/1t-o_LKHXX6NUzXSVdCWIWvVH_dDUBLCJ/view?usp=sharing)

Here, users can access their listings and edit or delete them. Once any changes has been made, they can click the save button and press continue.

# Future Improvements

There are a number of ways this project could be improved. After completing my training on Devops, I will have a better knowledge to improve my project in many ways. These include:

* Hosting a serverless website completely hosted on cloud using AWS for example.
* Have a register/log in functionality. As of now, anyone can create a listing on the website under any anonymous name. This is not a good approach as there could many people who post false information on the website. By having a register/log in functionality, the data on the website will be more accurate. This would also mean having a multiple databases and validating login details to allow or deny access to users.
* As you can see from my initial sketches, one of the idea was seperate these listings in different categories, for example by location. This will also require multiple tables to store data according to locations.
