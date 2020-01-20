import Axios from "axios";

const apiInstance = Axios.create({
  baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2',

})

apiInstance.interceptors.request.use((config) => {

  return {
    ...config,
    params: {
      developer: 'abdalz',
      ...config.params
    },
    data: {
      ...config.data
    }
  }
})

export default apiInstance