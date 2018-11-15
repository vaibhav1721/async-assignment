function step(iteration) {
    if (iteration === 10) return;
    setImmediate(() => {
      console.log(`setImmediate iteration: ${iteration}`);
      step(iteration + 1);
    });
  }
  step(0);