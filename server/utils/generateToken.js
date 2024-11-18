import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const options = {
        expiresIn: '1d',
        httpOnly: true,
    };
    res.cookie("token", token, options, {httpOnly: true, sameSite: "strict", maxAge: 24*60*60*1000});
    return res.status(200).json({ message, success: true, user});
};