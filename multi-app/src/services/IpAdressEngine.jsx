import { useState } from 'react';
import axios from 'axios';

export const isValidIP = (ip) => {
  if (ip === "") {
      return true;
  }
  
  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$|^(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}$|^(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}$|^(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}$|^:(?::[0-9a-fA-F]{1,4}){1,7}$|^::(?:[0-9a-fA-F]{1,4}:){1,7}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};

export const isValidData = (data) => {   return (
    data.ip && 
    isValidIP(data.ip) && 
    data.city && 
    data.region && 
    data.country && 
    data.org
  );
};


const ipAdress = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState('');

  const fetchIPData = async (ip) => {
    if (!isValidIP(ip)) {
      setError('Invalid IP address');
      return;
    }

    setError('');

    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url);

      if (isValidData(response.data)) {
        setIpData(response.data);
      } else {
        setError('Invalid data received from API');
      }
    } catch (error) {
      console.error("Error fetching IP address data:", error);
      setError('Error fetching IP address data');
    }
  };

  return { ipData, error, fetchIPData };
};

export default ipAdress;