import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('../images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

function RenderComments(props) {

    const comments = props.comments;
            
    const renderCommentItem = ({item, index}) => {
        
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };
    
    return (
        
        <Card title='Comments' >
        <FlatList 
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS
        };
    }

    render() {
        const dishId = this.props.route.params.dishId;
        return (
            <SafeAreaView style={{flex: 1}}>
                <RenderDish dish={this.state.dishes[+dishId]}
                    />
                <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </SafeAreaView>
        );
    }
}

export default Dishdetail;