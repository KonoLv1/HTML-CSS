$(function() {
    switch_img();
});
 
/**
 * ��莞�Ԃ��Ƃɉ摜��؂�ւ���
 * @param {number} time - �摜�؂�ւ��̑҂�����
 */
function switch_img(time) {
    var target = $('.js-switch-img');
    var current = 'is-current';
    var wait = time || 3000;
 
    setTimeout(function() {
        for (var i = 0; i < target.length; i++) {
            $wrapper = target.eq(i);
            // �Ō�̉摜�ȊO�͎��̗v�f�ɃJ�����g�N���X���ړ�
            if($wrapper.children('.' + current).index() < $wrapper.children().length - 1) {
                $wrapper.children('.' + current).removeClass(current)
                    .next().addClass(current);
            // �Ō�̉摜�̏ꍇ�͐擪�v�f�ɃJ�����g�N���X���ړ�
            } else {
                $wrapper.children('.' + current).removeClass(current);
                $wrapper.children().eq(0).addClass(current);
            }
        }
        switch_img(wait);
    }, wait);
}