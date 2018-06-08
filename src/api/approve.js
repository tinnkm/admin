import Api from '@/libs/axios.api'

export const getApprove = (page) => {
  return Api.get("http://localhost:8080/getApproves",{
    page
  })
}
