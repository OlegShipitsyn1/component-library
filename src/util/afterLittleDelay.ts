const LITTLE_DELAY = 280;

const afterLittleDelay = (fn: () => unknown): void => {
  setTimeout(fn, LITTLE_DELAY);
};

export default afterLittleDelay;
