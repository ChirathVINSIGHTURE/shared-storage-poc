// shared-worklet.js
class SharedStorageWorklet {
    async handleOperation(operation, data) {
      if (operation === 'get') {
        const result = await sharedStorage.get(data.key);
        return result;
      } else if (operation === 'set') {
        await sharedStorage.set(data.key, data.value);
        return 'Value set successfully';
      }
    }
  }
  
  registerSharedStorageWorklet('shared-worklet', SharedStorageWorklet);
  