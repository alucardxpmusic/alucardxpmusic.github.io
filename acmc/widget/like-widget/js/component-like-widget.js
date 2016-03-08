define(['knockout', 'jquery'], function(ko, $) {

    function LikeWidgetViewModel(params) {
        this.chosenValue = params.value;
    }

    LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
        $.ajax({ url: 'index.html' });
    };

    LikeWidgetViewModel.prototype.dislike = function() {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;

});
