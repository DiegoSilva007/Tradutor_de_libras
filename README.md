# LTalk — Brazilian Sign Language Translator

LTalk is a web-based Brazilian Sign Language (Libras) translation project developed to explore accessibility, computer vision, gesture recognition, and integration with external translation technologies.

The application provides two complementary experiences:

* **Portuguese → Libras:** text is translated and presented through the VLibras avatar.
* **Libras → Portuguese:** the camera detects selected hand gestures and displays their corresponding Portuguese interpretation.

The project was developed as a practical experiment in frontend development, browser APIs, computer vision, and human-computer interaction.

## 🚀 Features

### Portuguese → Libras

* Text input in Portuguese
* Character counter
* Integration with the VLibras widget
* Libras avatar visualization
* Responsive interface
* Loading and translation status indicators

### Libras → Portuguese

* Browser camera access
* Real-time video processing
* Hand landmark detection
* Gesture recognition
* Recognition of predefined gestures
* Support for gesture sequences and movement-based gestures
* Portuguese result display

## 🧠 Gesture Recognition

The camera-based experience uses computer vision and gesture recognition techniques to identify predefined hand configurations and movements.

The project combines:

* **MediaPipe Holistic** for hand, face, and pose landmarks
* **Fingerpose** for hand gesture estimation
* Custom JavaScript logic for movement and position-based gestures

Some gestures are identified through a combination of:

* Finger configuration
* Hand position
* Facial landmarks
* Body landmarks
* Hand movement
* Gesture sequences
* Confidence thresholds

This approach allows the application to recognize not only static hand configurations, but also gestures that depend on movement or body position.

## 🛠️ Technologies

### Frontend

* HTML5
* CSS3
* JavaScript
* Responsive Web Design
* Browser APIs

### Computer Vision

* MediaPipe Holistic
* Fingerpose
* Canvas API
* Web Camera API (`getUserMedia`)

### External Technology

* VLibras Widget
* Google Fonts
* MediaPipe CDN
* Fingerpose CDN

## 🏗️ Architecture

### Portuguese → Libras

```text
User
 │
 │ Portuguese text
 ▼
Web Interface
 │
 ▼
JavaScript
 │
 ▼
VLibras Widget
 │
 ▼
Libras Avatar
```

### Libras → Portuguese

```text
Camera
 │
 ▼
Browser Video Stream
 │
 ▼
MediaPipe Holistic
 │
 ├── Hand Landmarks
 ├── Face Landmarks
 └── Pose Landmarks
 │
 ▼
Fingerpose
 │
 ▼
Custom Gesture Logic
 │
 ▼
Portuguese Result
```

## 📂 Project Structure

```text
Tradutor_de_libras/
│
├── index.html
├── app.js
├── style.css
│
└── ltalk/
    ├── camera.html
    ├── script.js
    ├── style.css
    └── translate.js
```

## 🔍 What I Practiced

This project allowed me to practice:

* Frontend development
* Responsive interfaces
* DOM manipulation
* Browser APIs
* Camera access
* Real-time video processing
* Computer vision concepts
* Hand landmark analysis
* Gesture recognition
* Event-driven JavaScript
* Integration with external services
* Working with third-party JavaScript libraries
* UI state management
* Accessibility-oriented application development

## ⚙️ How It Works

### Text Translation

The user enters a Portuguese sentence and starts the translation process.

The application integrates with the VLibras widget, which provides the Libras avatar responsible for presenting the translation.

### Camera Translation

The user can open the camera interface and allow the browser to access the webcam.

The application processes the camera stream using MediaPipe Holistic. Hand landmarks are then analyzed by Fingerpose and by custom gesture-detection logic.

Some gestures are recognized directly from hand configuration, while others depend on additional conditions such as hand position, facial landmarks, body landmarks, or movement.

## ⚠️ Project Scope

The camera-based translator is a **prototype with a predefined set of recognized gestures**. It is not a complete Libras recognition system and should not be interpreted as a general-purpose Libras translator.

The project was developed to explore the technical challenges involved in real-time gesture recognition in the browser.

## 🔄 Future Improvements

Possible improvements include:

* Expand the gesture vocabulary
* Improve recognition accuracy
* Add more Libras signs and expressions
* Improve gesture sequence recognition
* Reduce false positives
* Improve camera calibration and tracking
* Separate JavaScript logic into modular files
* Add automated tests
* Improve accessibility
* Improve error handling
* Add better browser compatibility handling
* Improve performance on lower-end devices
* Add a more structured recognition model
* Improve project documentation

## 🎯 Project Objective

The main objective of LTalk was to explore how web technologies can be combined with accessibility tools and computer vision to create an interactive Libras-related application.

The project combines frontend development, external technology integration, browser APIs, computer vision, and custom gesture recognition logic in a single application.

## 👨‍💻 Author

**Diego Silva**

Full Stack Developer | Software Engineering Student
