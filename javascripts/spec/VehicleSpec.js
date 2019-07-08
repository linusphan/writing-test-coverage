describe('Vehicle constructor', function () {
  beforeEach(function () {
    this.car = new Vehicle({
      make: 'Honda',
      model: 'Civic',
    });
  });

  it('sets the make and model properties when an object is passed in', function () {
    expect(this.car.make).toEqual('Honda');
    expect(this.car.model).toEqual('Civic');
  });

  it('returns a concatenated string with make and model', function () {
    expect(this.car.toString()).toEqual('Honda Civic');
    this.car.model = 'CR-Z';
    expect(this.car.toString()).toEqual('Honda CR-Z');
  });

  it('returns a message when the horn is honked', function () {
    const message = this.car.honkHorn();
    expect(message).toMatch(/beep/);
  });
});


/*

it "returns a message when the horn is honked"
Use the toMatch matcher to test
Create a Honda constructor function in its own file in the "src" directory

Accept a parameter for the model as a string
Create a method on the prototype to verify the model is one of the models available

Available models are

["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"]
If it is not an available model, throw an error with a message "Model " + model_name + " does not exist". Then return undefined from the constructor.

Documentation on creating and throwing errors
If the model is valid, set the object's make to "Honda" and set the model

Create an object class method on the Honda object called getPrice

Accepts one parameter, the model as a string
Use the model to get the index of that model name from within the list of all models
Using this index, return the price at that position in this array

[16500,    14500,   21000,       15800,  12000,  13100, 16000,  18100,     22500,     19300]
Create an object class method on the Honda object called getModels that returns a copy of the models array.

Start writing Honda specs by creating a Honda spec Javascript file within the "spec" directory

Include the spec file and the Honda constructor file in the test runner HTML page

Create a describe block for the Honda constructor

Add these specs and write appropriate expect assertions

it "inherits the Vehicle prototype"
Create a new Honda and call the toString method that comes from the Vehicle prototype
it "sets the model property when a valid model is passed in"
Ensure both the make and model properties are correct
it "throws an error if an invalid model is passed in"
Create a local function that you can pass to the expect function that will create a new Honda with an invalid model. Use the toThrowError assertion to check for the presence of the invalid model's name in the error message.
it "returns a list of valid models"
Check both that a length property on the returned array is present using toBeDefined and that one of the expected models is present in the array using toContain
it "calls getPrice when a new car is created"
Create a spy on the getPrice method on the Honda object. When you create a new Honda afterwards, the spy should register that the getPrice method was called, and that it was called with the model you gave to the constructor.
it "returns a price for the passed in model"
Assert that the price be greater than zero
it "returns a price less than 15000 when a Civic is created"
it "returns a price greater than 10000 when a CR-Z is created"

*/