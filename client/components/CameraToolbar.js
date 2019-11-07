import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-native-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons';

const {Type: CameraTypes} = Camera.Constants

export default ({ 
    capturing = false, 
    cameraType = CameraTypes.back,
    onCaptureIn, onCaptureOut, onLongCapture, onShortCapture, fromCameraRoll, setCameraType
}) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableWithoutFeedback onPress={fromCameraRoll}>
                    <Icon icon={faImages} style={{color: 'white'}} size={30}/>
                </TouchableWithoutFeedback>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPressIn={onCaptureIn}
                    onPressOut={onCaptureOut}
                    onLongPress={onLongCapture}
                    onPress={onShortCapture}>
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal}/>}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setCameraType(cameraType === CameraTypes.back ? CameraTypes.front : CameraTypes.back)}>
                    <Ionicons name="md-reverse-camera" color="white" size={30}/>
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
);