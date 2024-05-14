import { readonly, ref } from 'vue'

const error = ref<null | Error>(null);

export const errorCurrent = readonly(error)

export function setError(errorObject: Error) {
  error.value = errorObject
}