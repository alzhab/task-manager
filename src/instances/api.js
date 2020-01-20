import Axios from "axios";

const apiInstance = Axios.create({
  baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2',

})

apiInstance.interceptors.request.use((config) => ({
  ...config,
  params: {
    developer: 'abdalzb',
    ...config.params
  },
}))

export default apiInstance