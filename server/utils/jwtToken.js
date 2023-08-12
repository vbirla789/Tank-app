// CREATING TOKEN AND SAVING IN COOKIE

export const sendToken = (user, statusCode, res) => {
  try {
    const token = user.getJWTToken();

    // option for cookies
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      // httpOnly: true,
      domain: "www.watertankdoctor.com", // Set the domain
      path: "/", // Set the path to '/'
    };

    console.log(options);

    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    // Handle any errors that might occur during cookie setting or JSON response
    console.error("Error sending token:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
