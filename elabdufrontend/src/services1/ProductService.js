import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8082/products';
class ProductService {

    createProduct(product) {
        return axios.post(BASE_REST_API_URL, product);
    }

    getAllProduct() {
        return axios.get(BASE_REST_API_URL );
    }

    getProductById(id) {
        return axios.get(BASE_REST_API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.delete(BASE_REST_API_URL + "/" + id);
    }
    

    updateProduct(id, product) {
        return axios.put(BASE_REST_API_URL + "/" + id, product);
    }

   
}
export default new ProductService();