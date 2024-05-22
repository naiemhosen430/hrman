import { model, Schema } from "mongoose";

const jobSchema = Schema(
  {
    creatorid: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
      minlength: [5, `The heading must be at least 5 characters long.`],
      maxlength: [100, `The heading must not be more then 100 characters.`],
    },
    title: {
        type: String,
        required: true,
        minlength: [5, `The title must be at least 5 characters long.`],
        maxlength: [400, `The title must not be more then 100 characters.`],
      },
      description: {
        type: String,
        required: true,
        minlength: [5, `The description must be at least 5 characters long.`],
        maxlength: [2000, `The description must not be more then 100 characters.`],
      },
  
      requirments: {
        type: String,
        required: true,
        minlength: [5, `The description must be at least 5 characters long.`],
        maxlength: [2000, `The description must not be more then 100 characters.`],
      },
      howtoapply:{
        type: String,
        required: true,
        minlength: [5, `The description must be at least 5 characters long.`],
        maxlength: [2000, `The description must not be more then 100 characters.`],
      },
      qualifications: {
        type: String,
        required: true,
        minlength: [5, `The description must be at least 5 characters long.`],
        maxlength: [2000, `The description must not be more then 100 characters.`],
      },
      workplace: {
      type: String,
      required: true,
      default: "yearly",
      enum: ["onsite", "remote", "hybride", "negotiable"]
    },
    salaryreview: {
      type: String,
      required: true,
      default: "yearly",
      enum: ["yearly", "monthly", "weekly", "negotiable", "never"]
    },
    festivalbonus:{
      type: String,
      required: true,
      default: "yearly",
      enum: ["yearly", "monthly", "weekly", "negotiable", "never"]
    },
    salary:{
      type: Number,
      required: true,
      default: 0
    },
    deadline: {
      type: Date,
      required: true,
      validate: {
        validator: function(v) {
          return +v > +Date.now();
        },
        message: props => `Deadline (${props.value}) cannot be use.!`
      }
    },
    address:{
      type: String,
      required: true,
      minlength: [5, `The address must be at least 5 characters long.`],
      maxlength: [2000, `The address must not be more then 100 characters.`],
    },
    companyname:{
      type: String,
      required: true,
      minlength: [5, `The company name must be at least 5 characters long.`],
      maxlength: [100, `The company name must not be more then 100 characters.`],
    },
    companyabout:{
      type: String,
      required: true,
      minlength: [5, `The company about must be at least 5 characters long.`],
      maxlength: [2000, `The company about must not be more then 100 characters.`],
    },
    companylogo:{
      type: String,
      required: true,
    },
    companylinkedin:{
      type: String,
      required: true,
    },
    companyemail:{
      type: String,
      required: true,
    },
    azpectedareafrom:{
      type: String,
      required: true,
      minlength: [5, `The azpected area from must be at least 5 characters long.`],
      maxlength: [2000, `The azpected area from must not be more then 100 characters.`],
    },
    aditionalskill:{
      type: String,
      required: true,
      minlength: [5, `The aditional skill from must be at least 5 characters long.`],
      maxlength: [2000, `The aditional skill from must not be more then 100 characters.`],
    },
    benefits:{
      type: String,
      required: true,
      minlength: [5, `The benefits from must be at least 5 characters long.`],
      maxlength: [2000, `The benefits from must not be more then 100 characters.`],
    },
    employmentstatus:{
      type: String,
      required: true,
      default: "fulltime",
      enum: ["fulltime", "parttime", "negotiable"]
    },
    skills:{
      type: Array,
      required: true,
      default: [],
    },
    apllicatorids:{
      type: Array,
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Job = model("job", jobSchema);
export default Job;
