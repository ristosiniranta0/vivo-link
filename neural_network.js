/**
 * filename: neural_network.js
 * Contains a neural network implementation in JavaScript for image recognition.
 * The neural network consists of multiple layers of nodes (neurons) that use
 * backpropagation algorithm to learn patterns and classify input images.
 * It uses various optimization techniques such as stochastic gradient descent,
 * weight initialization, regularization, and activation functions.
 * The code is capable of training and testing the neural network on a dataset
 * of labeled images, and provides accuracy metrics to evaluate its performance.
 *
 * Note: This code is a simplified version for demonstration purposes
 * and does not cover the full complexity of a real-world problem.
 */

// Neural Network class to encapsulate the network and its operations
class NeuralNetwork {
  constructor(layers, learningRate, regularization, activationFunction) {
    this.layers = layers;
    this.learningRate = learningRate;
    this.regularization = regularization;
    this.activationFunction = activationFunction;
    this.weights = [];
    this.biases = [];
    this.initializeWeightsAndBiases();
  }

  // Initialize the weights and biases with random values
  initializeWeightsAndBiases() {
    for (let i = 1; i < this.layers.length; i++) {
      const nodesInPrevLayer = this.layers[i - 1];
      const nodesInCurrLayer = this.layers[i];
      const weights = [];
      const biases = [];
      for (let j = 0; j < nodesInCurrLayer; j++) {
        const neuronWeights = [];
        for (let k = 0; k < nodesInPrevLayer; k++) {
          neuronWeights.push(Math.random() - 0.5);
        }
        weights.push(neuronWeights);
        biases.push(Math.random() - 0.5);
      }
      this.weights.push(weights);
      this.biases.push(biases);
    }
  }

  // Training the network on input images and their corresponding labels
  train(trainingData, epochs) {
    for (let epoch = 0; epoch < epochs; epoch++) {
      for (const [input, label] of trainingData) {
        const activations = [input];
        const zs = [];
        let activation = input;

        // Feedforward: calculating activations and weighted inputs for each layer
        for (let i = 0; i < this.layers.length - 1; i++) {
          const z = this.matrixMultiply(this.weights[i], activation);
          z.forEach((val, i) => z[i] += this.biases[i]);
          const activated = z.map(this.activationFunction);
          zs.push(z);
          activation = activated;
          activations.push(activated);
        }

        // Backpropagation: calculating errors and updating weights and biases
        const expected = this.createOutput(label);
        const deltas = [this.costDerivative(activations[activations.length - 1], expected)
        .dotMultiply(zs[zs.length - 1].map(this.activationFunctionDerivative))];
        for (let l = 2; l < this.layers.length; l++) {
          const delta = this.weights[this.weights.length - l + 1]
            .transpose().multiply(deltas[deltas.length - 1])
            .dotMultiply(zs[zs.length - l].map(this.activationFunctionDerivative));
          deltas.push(delta);
        }
        deltas.reverse();
        activations.shift();

        // Update weights and biases using gradients and regularization
        for (let i = 0; i < this.layers.length - 1; i++) {
          const regularizationTerm = this.weights[i].scalarMultiply(this.regularization);
          this.weights[i] = this.weights[i].scalarMultiply(1 - this.learningRate * this.regularization / trainingData.length)
          .transpose()
          .multiply(deltas[i])
          .transpose()
          .scalarMultiply(this.learningRate / trainingData.length)
          .subtract(regularizationTerm);

          const biasGrad = deltas[i].sumColumns();
          this.biases[i] = this.biases[i].subtract(biasGrad.scalarMultiply(this.learningRate / trainingData.length));
        }
      }
    }
  }

  // Testing the network's accuracy on a separate set of test images
  test(testData) {
    let correctPredictions = 0;
    for (const [input, label] of testData) {
      const output = this.feedForward(input).argMax();
      if (output === label) {
        correctPredictions++;
      }
    }
    return correctPredictions / testData.length;
  }

  // Feedforward prediction for a single input image
  feedForward(input) {
    let activation = input;
    for (let i = 0; i < this.layers.length - 1; i++) {
      const z = this.matrixMultiply(this.weights[i], activation);
      z.forEach((val, i) => z[i] += this.biases[i]);
      activation = z.map(this.activationFunction);
    }
    return activation;
  }

  // Utility function to create an output vector from a label
  createOutput(label) {
    const output = new Array(this.layers[this.layers.length - 1]).fill(0);
    output[label] = 1;
    return output;
  }

  // Matrix multiplication for a weight matrix and activation vector
  matrixMultiply(matrix, vector) {
    return matrix.map(row => row.dotMultiply(vector).sum());
  }

  // Computes the derivative of the cost function
  costDerivative(outputActivations, expectedOutput) {
    return outputActivations.subtract(expectedOutput);
  }

  // Activation function: sigmoid
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  // Derivative of the sigmoid function
  sigmoidDerivative(x) {
    const sigmoidX = this.sigmoid(x);
    return sigmoidX * (1 - sigmoidX);
  }
}

// Example usage of the NeuralNetwork class
const network = new NeuralNetwork([784, 30, 10], 0.5, 0.1, network.sigmoid);
const trainingData = [...];
const testData = [...];

network.train(trainingData, 10);
const accuracy = network.test(testData);
console.log(`Network accuracy: ${accuracy * 100}%`);