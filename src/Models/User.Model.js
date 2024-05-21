import { model, Schema } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
      minlength: [5, `The name must be at least 5 characters long.`],
      maxlength: [20, `The name must not be more then 20 characters.`],
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address.`,
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"]
    },
    country:{
      type: String,
      required: true,
      default: "Bangladesh"
    },
    status:{
      type: String,
      required: true,
      default: "active",
      enum: ["active", "disable"]
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
