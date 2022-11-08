exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

/**
 * Python integration 
 * 
 * 
    import json

    def lambda_handler(event, context):
        data_courses = json.dumps({"courses" : ["Software engineering", "Artificial Intelligence", "Introduction to programming", "Engineering economics",
            "Business intelligence", "Data analysis"]})
        return {
            'statusCode': 200,
            'body': data_courses
        }

 */

