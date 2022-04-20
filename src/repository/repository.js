const request = require('request');
const axios = require('axios');

let days = {
    'Monday': {
        'id': 0,
        'day': 'Monday', 
        'shouldDeploy': "yes"
    },
    'Friday': {
        'id': 1,
        'day': 'Friday',
        'shouldDeploy': "no"
    }
}

exports.getAll = () => {
    return days;
}

exports.get = (day) => {
    if (day in days)
        return { status: 200, 
                 response: days[day]
                }
    else
        return {    status: 500, 
                    response: {error: "Dont exist"}
                }
}

exports.post = (day, shouldDeploy) => {
    days[day] = {
        'id': Object.keys(days).length,
        'day': day, 
        'shouldDeploy': shouldDeploy
    };

    return days[day];
}

exports.put = (day, shouldDeploy) => {
    if (day in days) {
        days[day] = {
            'id': days[day].id,
            'day': day, 
            'shouldDeploy': shouldDeploy
        };

        return { status: 200, 
                 response: days[day]
                }
    } else {
        return {    status: 500, 
            response: {error: "Dont exist"}
        }
    }

    return days[day];
}

exports.getLikeAProxy = (day) => {

}

exports.getAllLikeAProxy = async () => {
    const response = await axios.get('http://127.0.0.1:5000/should-i-deploy-today')
    console.log(response.data);
    return response.data;
}

exports.postLikeAProxy = async (day, shouldDeploy) => {
    const response = await axios.post('/http://127.0.0.1:5000/should-i-deploy-today',{
        'day': day, 
        'shouldDeploy': shouldDeploy
    })
      .then(function (response) {
       return response
      })
      .catch(function (error) {
        return error;
      });

    console.log(response);
    return response;
}