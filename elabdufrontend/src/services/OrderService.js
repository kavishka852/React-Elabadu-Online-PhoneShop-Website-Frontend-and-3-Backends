import axios from 'axios'

const USER_BASE_REST_API_URL = 'http://localhost:8083/orders';
class OrderService {
    saveOrder(order) {
        return axios.post(USER_BASE_REST_API_URL , order)
    }

    getOrdersForCustomer(customerId) {
        return axios.get(USER_BASE_REST_API_URL + "/" + customerId)
    }

    getOrderDetailsForOrder(orderId) {
        return axios.get(USER_BASE_REST_API_URL + "/details" + orderId)
    }

    getAllOrder() {
        return axios.get(USER_BASE_REST_API_URL );
    }

    deleteOrder(orderId) {
        return axios.delete(USER_BASE_REST_API_URL + "/" + orderId);
    }
    // getAllUser() {
    //     return axios.get(USER_BASE_REST_API_URL + "/");
    // }

    // getUserById(id) {
    //     return axios.get(USER_BASE_REST_API_URL + "/" + id);
    // }

    // getUserByEmail(email) {
    //     return axios.get(USER_BASE_REST_API_URL + "/getUser" + email);
    // }

    // deleteUser(id) {
    //     return axios.delete(USER_BASE_REST_API_URL + "/delete/" + id);
    // }

    // updateUser(id, user) {
    //     return axios.put(USER_BASE_REST_API_URL + "/update/" + id, user);
    // }
}
export default new OrderService();