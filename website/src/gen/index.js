import React from 'react';

import './styles.css';
import textGenModel from '../images/textgenmodel.png'
import { Script } from 'vm';


class Gen extends React.Component {

    state = { 
        candidate: null
    }

    render() {
        return (
            <div className='gen'>
                <div className='modeling-title'>
                    Speech Generator Using Textgenrnn
                </div>
                <div className='intro-title'>
                    <strong>textgenrnn</strong> is a Python 3 module on top of Keras/TensorFlow for creating RNNs (recurrent neural network).
                </div>
                
                <div className='modeling-title'>
                    Model Architecture 
                </div>
                <div className='genned-speech'>
                    For my model, textgenrnn takes in an input of up to 40 characters, and implements <strong>multi-layer Recurrent Neural Network (RNN, LSTM)</strong> for training on my data and sampling from pretrained character-level language models. In other words the model takes the speeches as input and trains a Recurrent Neural Network that learns to predict the next character in a sequence. The RNN can then be used to <strong>generate text character by character</strong> that will look like the original training data.
                </div>
                <img src={textGenModel} />
                
                <div className='genned-speech'>
                    The model used speeches from the Democrat candidates who won the nomination, <strong>over 600 speeches</strong>. I trained the character sequences on a <strong>Google Cloud GPU</strong>, so the model can try and have an understanding of the language used. It starts off by learning the most common words used, then the most common phrases and mixing them all together to <strong>create new generated sequences</strong>. 
                </div>
                <div className='modeling-title'>
                    Generating The Text
                </div>
                <div className='gen-sub-title'>
                    Epoch 5
                </div>
                <div className='typewriter'>
                    <h1>“hello , iowa ! thank you ! thank you . thank you so much , everybody . thank you . thank you so much . thank you . thank you so much . thank you so much . thank you so much . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you very much , everybody . thank you . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you so much . wow ! thank you so much , everybody . thank you . thank you so much . thank you . thank you so much . thank you so much , everybody . thank you . thank you so much , everybody . thank you . thank you so much , everybody . thank you . thank you so much . wow ! thank you so much . thank you . thank you so much . thank you so much . thank you very much , everybody . thank you . thank you so much . wow ! thank you so much . wow ! thank you so much . thank you so much , everybody . thank you .”</h1>
                </div>
                
                <div className='gen-sub-title'>
                    Epoch 10
                </div>
                <div className='typewriter'>
                    <h1>“to do so that we can ' t make this century another american century . and i ' m going to need your help . i ' m not going to let that happen . and i ' m going to need your help . and i ' m not going to let that happen . and we ' ll remind the world why the united states of america . the president . hello , iowa ! thank you ! thank you . thank you so much , everybody . thank you . thank you so much . thank you . thank you so much . thank you so much . thank you so much . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you very much , everybody . thank you . thank you so much . thank you . thank you so much . thank you . thank you so much . thank you so much . wow ! thank you so much , everybody . thank you . thank you so much . thank you . thank you so much . thank you so much , everybody . thank you . thank you so much , everybody . thank you . thank you so much , everybody . thank you . thank you so much . wow ! thank you so much . thank you . thank you so much . thank you so much . thank you very much , everybody . thank you . thank you so much . wow ! thank you so much . wow ! thank you so much . thank you so much , everybody . thank you .”</h1>
                </div>
                <div className='gen-sub-title'>
                    Epoch 15
                </div>
                
                <div className='typewriter'>
                    <h1>“and i ' m not going to let that happen . and i ' ll tell you what i ' m going to need your help . and i ' m not going to let that happen . and i ' m going to need your help . and i ' m not going to let you know , i ' m not going to let that happen . and i ' ll tell you what i ' m going to need your help . i ' m not going to let them tell you what i thought , i ' d always tell you where i stood , and i ' d like to do is go back to the same rates we had when bill clinton was president . and he ' s been in washington . and i ' ll tell you what i ' m going to need your help . i ' m not going to let that happen . and i ' m not going to let you go back to the clinton rates . and that ' s why i ' m running for president . i ' m not going to let that happen . and i ' ll tell you what i ' m going to need your help . and i ' m not going to let that happen . and i ' ll tell you what i ' m going to need your help . i ' m not going to let you go back to the clinton rates . and i ' ll tell you what i ' m going to need your help . and i ' m not going to be easy . and i ' m not going to let them tell you what i”</h1>

                </div>
                <div className='gen-sub-title'>
                    Epoch 20
                </div>
                <div className='typewriter'>
                   <h1> “going to have to be able to get the same kind of health care that members of congress get themselves . we ' re not going to make sure that we ' re investing in clean energy , and we ' re going to make sure that we ' re investing in science and technology , making sure that we ' re investing in science and technology and innovation and technology , and we ' re going to make sure that we ' re investing in science , and we ' ve got to make sure that they ' re going to have to work for it . we ' re not going to let that happen . and if you ' re willing to work hard , you can do it right now . i ' ve got a lot of work to do . we ' ve got to make sure that we ' re investing in science and innovation , in the technology we can build together . together , we touched our own lives . and if you ' re willing to work hard , you can get ahead . and i ' ll tell you , i ' m not going to be a sure . it ' s not going to be easy . it ' s a question that i ' m going to need your help . i ' m not going to let that happen . and i ' ve got to tell you , you know what ?   i think it is the right thing to do . i ' m not going to sacrifice . and as long as i ' m commander in chief , the energy policy of our history .”</h1>
                </div>
                <div className='gen-sub-title'>
                    Epoch 25
                </div>
                <div className='typewriter'>
                    <h1>“we ' re going to make sure that we ' re investing in science and research , and we ' re going to have to make sure that they ' re going to make sure that we have a president who shared the beliefs , instead of the time i met in pennsylvania . the american people have the right to give them the chance to do even more to help themselves . that ' s what i ' m fighting for . that ' s why i ' m running for president . i want to make sure that those who are being forced to go to war . we can ' t just have to work with me . and i ' ll tell you what , i ' m not going to sacrifice for the next generation . we ' ll invest in preventative care , making sure that young people can stay on their parent ' s plan . and that ' s why i ' m running for a second term as president of the united states . good morning , i want to make sure that our schools are the best we can do . we ' ve got to make sure that we ' re investing in things that have been left in our way . and i ' m going to need your help . and i ' m going to need your help . we need a president who will fight for our common common - sense regulations to prevent a crisis like this from ever happening again . so i ' m not going to let them say you ' re going to have to be a leader who opposed this war .”</h1>
                </div>
                <div className='gen-sub-title'>
                    Epoch 30
                </div>
                <div className='typewriter'>
                    <h1>“well , i think that it was important to be a mistake . i think that we can do . this is a time for america . and it ' s time to turn the page on 47 million americans . it ' s time to turn the page on the failed policies of the past . and it ' s time to turn the page on a failed politics of the american dream . it is a moral obligation to turn the page . it ' s time to turn the page on the failed policies of the american dream . that is why i ' d be running for president . i ' m tired of talking to conform to the american people . and i ' m not just going to be going to be a situation in iraq . it ' s a plan that ' s been hard to be about the next president . i think , i want to be a mistake . i think it ' s a choice between washington too . and it ' s time to turn the page on the failed policies of the bush policies . that ' s why i ' m running”</h1>
                </div>
                <div className='gen-sub-title'>
                    Epoch 35
                </div>
                <div className='typewriter'>
                    <h1>“we ' re not going to be able to retire with dignity and respect . and that ' s why i ' m running for president of the united states . audience members . boo ! the president . now , i ' ve got to admit that i ' m going to take a few more years to solve all our problems . and i ' m going to go to the white house , and i ' m not going to be a perfect president . but i ' m not going to stand here . and we ' re going to make sure that we ' re rebuilding our alliances , but also the other side has been willing to spend and that ' s what i ' ll do as president . i ' m not going to turn medicare into a voucher just to pay for another millionaire ' s tax cut . that ' s the future we can ' t afford to see a doctor , or send their child to college , or pay more for college or eliminating groceries , or not to powerful the military , and it ' s obama ' s fault . i ' ll be a president who stands for work and faced for a simple belief that our country is stronger when we can count on affordable health care , and that ' s what i ' ll do as president . but i promised that we would cut taxes for the middle class , but not just a few , but i don ' t think that ' s the wrong direction for america . we will do this . we can do this . we can do this . americans have done this”</h1>
                </div>
            </div>
        )
    }
}

export default Gen