// ab-testing-worklet.js
class ABTestingWorklet {
  async run(operation, data) {
    if (operation === "selectURL") {
      const group = await sharedStorage.get("ab-testing-group");
      return group === 0 ? 0 : 1;
    }
  }
}

register("ab-testing", ABTestingWorklet);
