import "localforage";

let cache: LocalForage;
let localforage: LocalForage;

export async function useCache() {
  if (process.client && !localforage) {
    const pack = await import("localforage");
    localforage = pack.default || pack;
  }

  if (localforage) {
    cache = localforage.createInstance({
      name: "LocalCache",
    });
  }

  return cache;
}
