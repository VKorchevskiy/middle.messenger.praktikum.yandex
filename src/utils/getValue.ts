function getValue<T>(context: T, path: string, defaultValue?: any) {
  const keys = path.split(".");

  let result = context;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result = (result as { [key: string]: any })?.[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export default getValue;
