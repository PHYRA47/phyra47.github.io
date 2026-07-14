---
title: "Face Analysis System: Emotion, Age, and Gender Estimation"
excerpt: "A unified Python GUI application for real-time facial attribute analysis using deep learning <br/><img src='https://i0.wp.com/sefiks.com/wp-content/uploads/2020/09/age-gender-caffe-cover.png?resize=1024%2C638&ssl=1'>"
collection: portfolio
---
---
## Overview
This project is a **multi-task face analysis system** that combines three biometric capabilities into a single PyQt5-based GUI application:  
1. **Emotion Estimation**  
2. **Age Estimation**  
3. **Gender Estimation**  

Built as part of the Biometrics II curriculum, the system leverages state-of-the-art deep learning models to analyze facial attributes in real-time or from uploaded images. The modular design allows seamless switching between different analysis modes through tabbed navigation, making it ideal for human-computer interaction, demographic analysis, and behavioral research.

<div class="row justify-content-center">
    <div class="col-sm-4">
        {% include figure.html 
            url="/images/portfolio-3/emotion.png" 
            caption="Emotion Estimation Tab" 
            width="70%" 
            align="center"
        %}
    </div>
    <div class="col-sm-4">
        {% include figure.html 
            url="/images/portfolio-3/age.png" 
            caption="Age Estimation Tab" 
            width="70%" 
            align="center"
        %}
    </div>
</div>

## Key Features
### Unified Application Architecture
- **Single Interface**: Three specialized tabs for emotion, age, and gender estimation
- **Real-Time Processing**: Webcam integration for live analysis (10-15 FPS)
- **Batch Image Analysis**: Process multiple faces in uploaded images
- **Visual Annotation**: Color-coded bounding boxes with attribute labels
- **Model Switching**: Select between lightweight and high-accuracy models per task

### Emotion Estimation Tab
- 🎭 **7 Emotion Classes**: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral
- 🤖 **Models**: MobileNetV2 (85% accuracy) + Custom Sequential CNN (78% accuracy)
- 📈 **Confidence Display**: Real-time emotion probability distribution

### Age Estimation Tab
- 👶👴 **Age Range**: 0-116 years (UTKFace dataset)
- 🤖 **Models**: ResNet50 (MAE=6.2 years) + Custom CNN (MAE=8.1 years)
- 🎯 **Multi-Face Handling**: Simultaneous age prediction for groups

### Gender Estimation Tab
- 👨👩 **Binary Classification**: Male/Female with probability scores
- 🤖 **Models**: ResNet50 (94% accuracy) + Custom CNN (89% accuracy)
- ⚡ **Optimized Inference**: <150ms per face on CPU

## Technical Details

### Shared Components
- **Face Detection:** OpenCV Haar Cascades

### Common Infrastructure
- **GUI Framework:** PyQt5
- **Backend:** TensorFlow 2.x
- **Webcam Processing:** Multi-threaded
- **Model Management System**

## Demo

{% include video.html 
    url="https://github.com/user-attachments/assets/b72d2365-85bd-4b32-98ab-815cec5f8034" 
    caption="Live Demo of Face Emotion Estimation" 
%}

{% include video.html 
    url="https://github.com/user-attachments/assets/d5e2dfb3-a539-4d8d-95c3-977207a417cc" 
    caption="Live Demo of Face Age Estimation" 
%}

{% include video.html 
    url="https://github.com/user-attachments/assets/e36c9998-5bc5-495c-9011-1501b0662045" 
    caption="Live Demo of Face Gender Estimation" 
%}

### Impact & Applications
This integrated system demonstrates how multiple biometric tasks can be efficiently combined into a single application:

- **Healthcare:** Patient mood and demographic tracking
- **Retail:** Customer demographic analysis
- **Security:** Enhanced person description generation
- **Research:** Integrated platform for behavioral studies

### Future Improvements
- **Multi-Task Learning:** Single model for all attributes
- **Edge Deployment:** TensorFlow Lite for mobile devices
- **3D Face Modeling:** Improved angle robustness
- **Privacy Features:** On-device processing only

### Links
- [GitHub Repository](https://github.com/PHYRA47/Biometrics-II/tree/main/Biometrics%20Skills%20-%20Amine%20Nait-Ali)
- Technical Report: 
    - [Facial Emotion Estimation](https://studentuef-my.sharepoint.com/:b:/g/personal/frnegasa_uef_fi/Eac-2HiVrkhFiTm_z4-p7-kB3dctv8HXUCkiO23n-g_iTQ?e=nhQiSf), 
    - [Age Estimation](https://studentuef-my.sharepoint.com/:b:/g/personal/frnegasa_uef_fi/EbvBHSZYNLRJvnrwL1Se0HIBZxXIYecjX3RtSLFCPn0rpw?e=XxdZfy), 
    - [Gender Estimation](https://studentuef-my.sharepoint.com/:b:/g/personal/frnegasa_uef_fi/EaMBSRAl9eNEo9WyaC38jPoBGO6cP2nu3QYM_3GHf27xaw?e=V0TmpK)
- [Emotion Demo](https://github.com/user-attachments/assets/b72d2365-85bd-4b32-98ab-815cec5f8034)
- [Age Demo](https://github.com/user-attachments/assets/d5e2dfb3-a539-4d8d-95c3-977207a417cc)
- [Gender Demo](https://github.com/user-attachments/assets/e36c9998-5bc5-495c-9011-1501b0662045)
