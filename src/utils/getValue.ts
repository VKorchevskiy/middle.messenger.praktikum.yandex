function getValue(obj: any, path: string, defaultValue?: any) {
  const keys = path.split(".");

  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result = result?.[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export default getValue;
