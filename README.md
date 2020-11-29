# NurseYou---Optum-Stratethon_Season-2_Submission
 Our app is powered by an IoT device, an image processing algorithm, and AI. This app can act as a monitor for patients at home who are suffering from illness and require special attention from caretakers/guardian and doctors at home.

## RoboCare app: 
PROBLEMS FACED:
1. Patients faces issues of approachability, availability and affordability when it comes to receiving care at hospitals.
2. Even when the patient can receive care, things can go wrong as it becomes more and more difficult for hospitals to provide proper care owing to shortage of nurses and doctors.
3. Also many patients like senior citizens, with cerebral palsy, paralyzed needs 24/7 care as they cannot communicate because of physical disability. But most of the people cannot afford it due to the higher cost.
4. Due to this reason they often land to bad healthcare which lead to other serious problems like exposure to allergic food.
5. Unavailability of fitness apps and programs
6. Mobility assistance 
7. Unavailability  of emergency alarms

**What we provide?**

| Screen1 | Screen 2 | Screen 3 |
| --- | --- | --- |
| ![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/splashUI.jpg) | ![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/dashboard.png) |  ![3](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/cv.png) |
| SplashUI Screen | Dashboard storing patient data | Computer vision to detect distress or drooling in cerebral pasly patients |


**Our app is powered by an IoT device, an image processing algorithm, and AI. This app can act as a monitor for patients at home who are suffering from illness and require special attention from caretakers/guardian and doctors at home.**
Our App keeps the track of patient’s health factors like (BODY TEMPERATURE AND HEARTBEAT) for doctors and patients’ caretakers at home, which are monitored using hardware IoT sensors. also we have built a robot to transfer essential good to patients keeping social distancing in mind (Due to COVID19) which moves following gestures by hand. Also this can be used as a wheelchair for week senior citizen patients and cerebral palsy people with paralysis. And in final touch we devised an Image learning algorithm which is connected to the firebase cloud storage and give alerts in app when the patient make face gesture, or when there is a DROOLING action in cerebral palsy patients, to call for help since they can’t speak distinctly and moving their mouth, or a simple gesture will do good for these patients.

**Summing up the features and app architecture:**
![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/features.png)


![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/architecture.png)


![3](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/architecture2.png)

We are using an ***ESP8266 microcontroller*** to connect the device with the cloud and with the image processing system. And our app is also connected with the same cloud storage so if patient will make gestures, an alarm will ring in the app. Also the temperature and heartbeat reading will be sent to cloud in real-time basis and all of this will be available in our app through which doctor can make report of patients following social distancing.

| Hardware 1 | Hardware 2 | 
| --- | --- | 
| ![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/sensor2.png) | ![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/sensor2.png) |  
| Temperature sensing device setup | Heartbeat/pulse sesing device setup |

***All this hardware setup would be mounted on a wheelchair or on the rest/bed for the patient in th emost efficient way***




**An alarm is sounded to the caretaker/doctor using the app.**
1. When the heartbeat/pulse crosses a threshold.
2. When the body temperature is above the normal body temperature
3. When the patient shows signs of distress monitored by a camera and detected by image processing algorithms and AI detecting (open mouth gesture) which indicates drooling in cerebral palsy patients and discomfort in elderly handicapped people.

## Medichat -- A slack for patients and doctors
PROBLEMS FACED:

1. India facing shortage of 600,000 doctors, 2 million nurses: Study. High out-of-pocket medical costs to the patient are compounded by limited government spending for health services, according to the report by the Center for Disease Dynamics, Economics & Policy (CDDEP) in the US

2. Due to the pandemic, a large number of people are not able to travel to the medical facility. Also due to the shortage of nurses, there are not enough caretakers for patients at home especially the elderly/children in remote areas.
Doctors can't handle countless phonecalls, and also can't attend each patient personally. 

**What we provide ?**

1. We provide a common platform for doctors and nurses to form health groups/channels like diabetes, mental health, COVID-19, etc so that patients suffering from a common disease can signup and meet doctors from differnet parts of the country and the world and seek medical advice.

2. We also provide a private chat feature where the patients can personally message other patients, doctors as private chat and get their personal health, problems solved. 

3. Thus with this system we can raise a general health awareness among the population of the country which can help curb or prevent the spread of viruses and other infections by seeking medical guidance from health expertsChat UI - Create channels, discuss health issues and chat privately to doctors, recieve updates & notification, share media |.

Features we provide:
1. Register and Login
2. Create channels for health and discuss important health issues.
3. Share health tips, prescriptions, directions for medication, etc
4. Chat privately
5. upload media in JPG, PNG format, can be used to share medicine photos, prescriptions, etc.
6. Star your favorite channels for referring and using later
7. Change your avatar and also see if the other users are available(online) for chat, so that the patients can solve their health issues online in real time.
8. See message timestamp and elapsed time of conversation
9. Auto scroll using Search feature to see and previous messages, newest conversations
10. ***Support for patients with Color Blindness*** : Our UI also allows patients to change the primary and secondary UI colors so that they can clearly distinguish between the elements present in the UI and choose an interface with colors friendly to the eye.


| Register | Login | ChatSpace |
| --- | --- | --- |
| ![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/register.png) | ![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/login.png) |  ![3](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/medichat.png) |
| Register New Users | Login User | Chat UI - Create channels, discuss health issues and chat privately to doctors, recieve updates & notification, share media |




***Support for patients with Color Blindness***: Change UI color Themes comfortable to the eye (for color blind syndrome) in patients.
| Theme 1 | Theme 2 |
| --- | --- |
| ![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/UI1.png) | ![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/UI2.png) |




***We have also developed a special keyboard for typing for handicapped users that can be operated using eye-ball tracker and operates in O(logn) time complexity just like binary search and also has a google search functionality added to it.***

![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/keyboard.png)
![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/eye_control.png)


### What we plan to implemement for MediChat in the future ?
1. Implementing a news section wherein people get daily updates about trends in medicine, COVID cases by calling an external APIs.
2. Implementing Speech to text NLP engine wherein we can leverage Natural Language Processing techniques and tools like Facebook's Wit.ai to capture the intent of the doctors communicated message and update patient records in the UI in discrete fields like medical prescription, surgery, patient history, along with the timestamp, so that doctors don't face a burnout by having to spend time writing patient records on paper/documents but it can be updated using Speech to Text.



## Model to detect allergic ingredients in your food by scanning and identifying the type of food and printing the warning if any
![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/food_allergies.png)


## A UNIQUE DATA VIZ FOR FOOD ALLERGY MODEL
Data analysis on various foods from plant and animal sources and plots and conclusions provided
![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/DV1.png)
![2](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/DV1.png)
![3](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/DV1.png)

## Entity Extraction using Natural Language processing
***Extracting disease labels from clinical reports***
1. Text matching
2. Evaluating a labeler
3. Negation detection
4. Dependency parsing

1. Question Answering with BERT
2. Preprocessing text for input
3. Extracting features/answers from model output.

***What is BERT Language model?***
Bidirectional Encoder Representations from Transformers (BERT) is a Transformer-based machine learning technique for natural language processing pre-training developed by Google. BERT was created and published in 2018 by Jacob Devlin and his colleagues from Google

![3](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/BERT.png)


## Data analysis and plots involving clustering algorithms with the SYNTHEA datasets provided
![1](https://github.com/Brute-Force2020/NurseYou---Optum-Stratethon_Season-2_Submission/blob/main/hackathon/observation.jpg)

## COST BREAKDOWN (approx)

1. SMALL PC WITH WEBCAM- $170
2. ROBOCARE APP- FREE OF COST -- cosnidering everybody has/owns a smartphone
3. WEBAPP COST – DOCTORS CONSULTATION FEES ONLY
4. FOOD ALLERGIC DETECTION SYSTEM INSTALLED IN PC
5. WHEELCHAIR HAND GESTURE MECHANISM: $71

**TOTAL COST OF SYSTEM: $241 (Approx)**


