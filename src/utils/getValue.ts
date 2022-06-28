function getValue(obj: any, path: string, defaultValue?: any) {
  const keys = path.split(".");

  let result = obj;
  for (const key of keys) {
    result = result?.[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export default getValue;
