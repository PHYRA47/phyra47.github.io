---
title: "Face Recognition System for Biometric Verification"
excerpt: "A Python-based GUI application for face recognition and verification using deep learning models <br/><img src='/images/500x300.png'>"
collection: portfolio
---

## Overview
This project involved the development of a **Face Recognition System** designed for biometric verification. The system leverages state-of-the-art deep learning models to perform both **image-to-image comparison** and **real-time face recognition** through a webcam feed. Built with a user-friendly **PyQt5-based GUI**, the application provides an intuitive interface for users to interact with the system, making it suitable for both technical and non-technical audiences.

The system was designed to address the growing need for secure and efficient biometric verification in various applications, such as access control, identity verification, and surveillance. By incorporating multiple deep learning architectures, the system ensures high accuracy and robustness across diverse scenarios, including varying lighting conditions and poses.

<div class="row justify-content-center">
    <div class="col-sm-5">
        {% include figure.html 
            url="/images/portfolio-1/tab1.png" 
            caption="Face Recognition System GUI Interface - Image Comparison" 
            width="400px" 
        %}
    </div>
    <div class="col-sm-5">
        {% include figure.html 
            url="/images/portfolio-1/tab2.png" 
            caption="Face Recognition System GUI Interface - Webcam Comparison" 
            width="400px" 
        %}
    </div>
</div> 

## Key Features
The face recognition system offers several advanced features to ensure reliable and efficient biometric verification:
- **Multi-Model Support**: The system integrates multiple deep learning architectures, including **VGG19**, **Xception**, and **ResNet**, allowing users to choose the most suitable model for their specific use case.
- **Real-Time Face Verification**: The system can process live webcam feeds to perform real-time face recognition, making it ideal for applications requiring immediate verification.
- **Image-to-Image Comparison**: Users can compare two images to determine if they belong to the same individual, with detailed similarity scores provided for each comparison.
- **User-Friendly Interface**: The **PyQt5-based GUI** ensures ease of use, with clear navigation and intuitive controls for both image and webcam-based verification.
- **Detailed Similarity Scoring**: The system provides a comprehensive similarity score for each comparison, enabling users to make informed decisions based on the confidence level of the match.

## Technical Details
The system was developed using a modular architecture, ensuring flexibility and scalability. Key technical components include:
- **Programming Language**: Python
- **GUI Framework**: PyQt5
- **Deep Learning Models**: VGG19, Xception, ResNet
- **Key Libraries**: OpenCV (for image processing), TensorFlow (for deep learning), NumPy (for numerical computations)
- **Architecture**: The system is divided into three main components:
  1. **User Interface**: Handles user interactions and displays results.
  2. **Model Management**: Manages the loading and switching of deep learning models.
  3. **Image Processing**: Preprocesses input images and performs face detection and recognition.

{% include video.html url="https://github.com/user-attachments/assets/eb8b5ad0-29cd-408c-a0ec-1ebf7e64e5e0" caption="Live Demo of Face Recognition System" %}

## Impact & Results
The face recognition system achieved impressive results, demonstrating its effectiveness in real-world scenarios:
- **High Accuracy**: The system achieved **[X]% accuracy** in face verification tasks, outperforming baseline models in controlled tests.
- **Robustness**: It successfully handled challenging conditions, such as varying lighting, different poses, and partial occlusions.
- **Real-Time Performance**: The system processes webcam feeds with minimal latency, ensuring smooth and responsive real-time verification.
- **Anti-Spoofing**: The system incorporates measures to detect and prevent common spoofing attempts, such as the use of photographs or videos.

## Future Improvements
While the system performs well in its current state, there are several areas for future enhancement:
- **Integration with Databases**: Adding support for large-scale face databases to enable identity verification against a predefined set of individuals.
- **Mobile Compatibility**: Developing a mobile-friendly version of the system to expand its applicability to smartphones and tablets.
- **Enhanced Anti-Spoofing**: Incorporating advanced techniques, such as 3D face recognition or liveness detection, to further improve security.

## Links
- [GitHub Repository](https://github.com/PHYRA47/Biometrics-II/tree/main/Biometrics%20Skills%20-%20Amine%20Nait-Ali/skill1_Face_Recognition_for_Verification)
- [Technical Report](https://studentuef-my.sharepoint.com/:b:/g/personal/frnegasa_uef_fi/EWWjhsDW8wZDu4IyLoOzc0IBUqZz6giuS1aRyl1rrhCQoQ?e=Ye5hTX)
- [Live Demo](https://github.com/user-attachments/assets/eb8b5ad0-29cd-408c-a0ec-1ebf7e64e5e0)