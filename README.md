# About

This project is about getting more practice with Jasmine and its features. The
project will have two JavaScript object constructors and Jasmine testing will be
used to verify that the constructors behave as intended.

# Features

* `Vehicle` constructor
  * instances have `make` and `model` properties
  * `toString()` method that returns vehicle's make and model
  * `honkHorn` method that returns string
* `Honda` constructor
  * accepts `model` parameter
  * has `verify` method that verifies if model is one of the available models
      * Available models: `["Accord", "Civic", "Crosstour",
                            "CR-V", "CR-Z", "Fit", "HR-V",
                            "Insight", "Odyssey", "Pilot"]`
  * `getPrice` method that returns price for the specified Honda model
  * `getModels` method that returns copy of the models array

# Other Notes

Check out the specs for more details and to better understand the constructors
and their intended behaviors. The specs also act like documentation on the code.
