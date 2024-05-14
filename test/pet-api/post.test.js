const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

describe('Petstore API - Pet Endpoint', () => {
    const client = axios.create({
        baseURL: 'https://petstore.swagger.io/v2'
    });

    it('should upload an image for a pet', async () => {
        const petId = 1; 
        const imagePath = 'test/pet-api/test-data/puppy.jpeg'; // Replace with the path to an actual image

        const form = new FormData();
        form.append('file', fs.createReadStream(imagePath));

        const response = await client.post(`/pet/${petId}/uploadImage`, form, {
            headers: form.getHeaders()
        });

        expect(response.status).toBe(200);
    });
});