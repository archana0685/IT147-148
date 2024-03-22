export default function AuthHeader() {
    
    const token = (localStorage.getItem('ADMIN_TOKEN'));
    const headers = {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin' : '*'
    };
    
        if (token) {
            return headers;
        } else {
            return {};
        }
    }