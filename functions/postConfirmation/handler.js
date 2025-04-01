const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.postConfirmation = async (event, context, callback) => {
  try {
    const userPoolId = event?.userPoolId;
    const username = event?.userName;
    const triggerSource = event?.triggerSource;

    if (triggerSource !== "PostConfirmation_ConfirmSignUp") {
      return callback(null, event);
    }

    if (!userPoolId || !username) {
      return callback(null, event);
    }

    const params = {
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: [
        {
          Name: "email_verified",
          Value: "true",
        },
      ],
    };

    await cognito.adminUpdateUserAttributes(params).promise();
    return callback(null, event);
  } catch (error) {
    console.error("Erro em postConfirmation:", error);
    return callback(error);
  }
};
