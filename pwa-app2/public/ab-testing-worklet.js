// ab-testing-worklet.js
class ABTestingWorklet {
  async handleOperation(operation, data) {
    if (operation === "selectURL") {
      const group = await sharedStorage.get("ab-testing-group");
      return group === 0 ? 0 : 1;
    }
  }
}

registerSharedStorageWorklet("ab-testing", ABTestingWorklet);
