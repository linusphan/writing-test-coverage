function Honda(model) {
  const currentModel = this.verify(model);

  if (!currentModel) {
    throw new Error(`Model ${model} does not exist`);
  }

  this.make = 'Honda';
  this.model = model;
  this.price = Honda.getPrice(this.model);
}

(function () {
  const models = [
    'Accord',
    'Civic',
    'Crosstour',
    'CR-V',
    'CR-Z',
    'Fit',
    'HR-V',
    'Insight',
    'Odyssey',
    'Pilot',
  ];

  const prices = [
    16500,
    14500,
    21000,
    15800,
    12000,
    13100,
    16000,
    18100,
    22500,
    19300,
  ];

  Honda.prototype = Object.create(Vehicle.prototype);
  Honda.constructor = Honda;

  Honda.prototype.verify = model => models.indexOf(model) !== -1;
  Honda.getPrice = model => prices[models.indexOf(model)];
  Honda.getModels = () => models.slice();
})();
