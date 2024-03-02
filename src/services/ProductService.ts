import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ProductService {
  _baseUrl: string = "https://localhost:7212/api/Vegetable";
  _baseUrl2: string = "https://localhost:7212/api/Auth/login";
  _baseUrl3: string = "https://localhost:7212/api/Auth/register";
  _baseUrl4: string = "https://localhost:7212/api/Fruit";
  _baseUrl5: string = "https://localhost:7212/api/Bread";
  _baseUrl6: string = "https://localhost:7212/api/Sweet";
  _baseUrl7: string = "https://localhost:7212/api/Drink";

  async getVegetables() {
    const response = await axios.get(this._baseUrl, {
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getFruits() {
    const response = await axios.get(this._baseUrl4, {
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getBreads() {
    const response = await axios.get(this._baseUrl5, {
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getSweets() {
    const response = await axios.get(this._baseUrl6, {
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async getDrinks() {
    const response = await axios.get(this._baseUrl7, {
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  async register(email: string, password: string) {
    try {
      const response = await axios.post(this._baseUrl3, { email, password });
      return response.data;
    } catch (error: string | any) {
      if (error.isAxiosError && !error.response) {
        console.error("Network error:", error);
        alert(
          "Network error: Please check your internet connection and try again."
        );
      } else {
        console.error("Error:", error);
      }
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await axios.post(this._baseUrl2, { email, password });
      return response.data;
    } catch (error: string | any) {
      if (error.isAxiosError && !error.response) {
        console.error("Network error:", error);
        alert(
          "Network error: Please check your internet connection and try again."
        );
      } else {
        console.error("Error:", error);
      }
      throw error;
    }
  }
}
