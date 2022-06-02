<template>
  <v-card class="pa-10 ma-4" width="1000">
    <v-card-title class="justify-center display-1">CCI Form</v-card-title>
    <v-form class="pt-6">
      <v-row>
        <v-col> Please enter your First name </v-col>
        <v-col> <v-text-field outlined></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Last name </v-col>
        <v-col> <v-text-field outlined></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Middle name </v-col>
        <v-col> <v-text-field outlined></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Date of Birth </v-col>

        <v-col>
          <v-menu
            ref="menu1"
            v-model="menu1"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                hint="MM/DD/YYYY format"
                persistent-hint
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Email Address </v-col>
        <v-col>
          <v-text-field outlined append-icon="mdi-mail"></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Contact Number </v-col>
        <v-col>
          <v-text-field outlined append-icon="mdi-phone"></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col> Please enter your Residential Address </v-col>
        <v-col> <v-text-field outlined></v-text-field></v-col>
      </v-row>
      <v-row>
        <v-col> What type of loan agreement is this claim related too? </v-col>
        <v-col>
          <v-select
            :items="items1"
            label="-select-"
            multiple
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Where did the purchase this policy? </v-col>
        <v-col> <v-select label="" outlined></v-select></v-col>
      </v-row>

      <v-row>
        <v-col>
          What date did you take out the insurance / or settle the loan? (if you
          are unsure please estimate)
        </v-col>
        <v-col>
          <v-select
            label="-select-"
            :items="items2"
            multiple
            outlined
          ></v-select
        ></v-col>
      </v-row>

      <v-row>
        <v-col> Is your loan still active? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Please select which Financial Institution this enquiry is related too.
        </v-col>
        <v-col>
          <v-select label="-select-" :items="items3" outlined></v-select
        ></v-col>
      </v-row>
      <v-row>
        <v-col> How much were your premiums ? </v-col>
        <v-col> <v-text-field outlined></v-text-field></v-col>
      </v-row>

      <v-row>
        <v-col> Were your premiums added to your loan or credit card? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
            <v-radio label="Unsure" value="unsure"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Were you the sole applicant on the loan? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          If you have a copy of the policy documents, have a good look at them.
          Which of these benefits do you have?
        </v-col>
        <v-col> <v-select label="" outlined></v-select></v-col>
      </v-row>
      <v-row>
        <v-col> Were you aged 60 or over when you took out the policy? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col> Were you aged 60 or over when you took out the policy? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Do you have life insurance through your Superannuation fund?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Were you self-employed when you took out the loan / insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          Were you unemployed when you took out the loan / insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Were you working part-time when you took out the loan / insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Were you working on a casual/temporary/seasonal/non-renewable basis
          when you took out the loan / insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Were you retired when you took out the insurance? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col> Were you retired when you took out the insurance? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Did you have any pre-existing health conditions when you took out the
          policy?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Did you know you had bought the insurance? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Did the salesperson tell you that you had the buy the insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Were you given the opportunity to go through the loan documents at
          least 48 hours before you signed them?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Did the salesperson explain all the important exclusions and
          limitations?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Did the salesperson explain your ‘cooling off’ rights? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Did the salesperson pressure you into buying the insurance?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Did the salesperson use other unfair sales tactics? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Did the salesperson give you information that was misleading?
        </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col> Did you receive a product disclosure statement (PDS)? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col> Overall do you think the sales process was fair? </v-col>
        <v-col>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Yes" value="yes"></v-radio>
            <v-radio label="No" value="no"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-card-text>
        Please confirm you have read and accept our
        <a color="primary">Privacy Policy and Terms and conditions </a>
        this question is required
      </v-card-text>
      <v-checkbox
        v-model="checkbox"
        label="I accept / I don’t accept"
      ></v-checkbox>

      <v-card-actions class="justify-center">
        <v-btn color="primary">Submit</v-btn>
        <v-btn>Cancel</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),

      menu1: false,
      items1: ["Home Loan", "Vehicle Finance", "Credit Card", "Personal Loan"],
      items2: ["Phone", "Broker", "At the store / branch", "Internet", "Mail"],
      items3: [
        "Life cover",
        "Disability cover",
        "Unemployment cover",
        "I am not sure because I do not have a copy of the policy",
        "I am unsure because I do not understand the policy documents",
      ],
    };
  },
};
</script>
