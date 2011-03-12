// This file was automatically generated from widgets-js.soy.
// Please don't edit this file by hand.

goog.provide('beige.templates.widgets');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.widgets.recentConsumptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recentContent" class="module"><h2>Recently Gawped</h2><ul class="consumptions">');
  var itemList4 = opt_data.items;
  var itemListLen4 = itemList4.length;
  if (itemListLen4 > 0) {
    for (var itemIndex4 = 0; itemIndex4 < itemListLen4; itemIndex4++) {
      var itemData4 = itemList4[itemIndex4];
      output.append('<li class="consumption"><div curie="', soy.$$escapeHtml(itemData4.content.curie), '" class="item" ><div class="thumbnail">', (itemData4.content.thumbnail) ? '<a href="/episodes/' + soy.$$escapeHtml(itemData4.content.curie) + '"><img src="' + soy.$$escapeHtml(itemData4.content.thumbnail) + '" class="thumbnailImage"/></a>' : (itemData4.content.image) ? '<a href="/episodes/' + soy.$$escapeHtml(itemData4.content.curie) + '"><img src="' + soy.$$escapeHtml(itemData4.content.image) + '" class="thumbnailImage"/></a>' : '', '</div><div class="info"><p class="title"><a href="/episodes/', soy.$$escapeHtml(itemData4.content.curie), '">', soy.$$escapeHtml(itemData4.content.primaryTitle), (itemData4.content.secondaryTitle) ? ' - ' + soy.$$escapeHtml(itemData4.content.secondaryTitle) : '', '</a></p><p class="desc">', (itemData4.content.description) ? soy.$$escapeHtml(itemData4.content.description) : '', '</p><p class="actions"><span class="ago">', soy.$$escapeHtml(itemData4.ago), '</span>', (opt_data.currentUserDetails && itemData4.user.screenName && opt_data.currentUserDetails.id && opt_data.currentUserDetails.id == itemData4.user.screenName) ? '<span class="remove"><a href="#" uri="' + soy.$$escapeHtml(itemData4.content.uri) + '" class="remove_item"><img src="/images/remove.png" class="remove_button" /></a></span>' : '', '</p>', (opt_data.showUserNotChannel && itemData4.user.screenName) ? '<div class="userIcon"><a href="/' + soy.$$escapeHtml(itemData4.user.screenName) + '"><img src="' + soy.$$escapeHtml(itemData4.user.profileImage) + '" alt="' + soy.$$escapeHtml(itemData4.user.screenName) + '" /></a></div>' : (itemData4.channel) ? '<div class="channelPromo"><a href="' + soy.$$escapeHtml(itemData4.channel.uri) + '"><img src="' + soy.$$escapeHtml(itemData4.channel.logo) + '" /></a></div>' : '', '</div></div><div class="clearfix"></div></li>');
    }
  } else {
    for (var i61 = 0; i61 < 3; i61++) {
      output.append('<li class="consumption"><div class="item" ><div class="thumbnail emptyAvatar"></div></div><div class="clearfix"></div></li>');
    }
  }
  output.append('</ul></div>');
  if (!opt_sb) return output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.widgets.topList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div ', (opt_data.divId) ? 'id="' + soy.$$escapeHtml(opt_data.divId) + '" ' : '', 'class="topList module" style="width:360px;"><ul><h2>', soy.$$escapeHtml(opt_data.title), '</h2>');
  var countList75 = opt_data.counts;
  var countListLen75 = countList75.length;
  if (countListLen75 > 0) {
    for (var countIndex75 = 0; countIndex75 < countListLen75; countIndex75++) {
      var countData75 = countList75[countIndex75];
      output.append((countData75.target && countData75.target.uri && countData75.target.thumbnail) ? '<li><span class="picture"><a href="/shows/' + soy.$$escapeHtml(countData75.target.curie) + '"><img src="' + soy.$$escapeHtml(countData75.target.thumbnail) + '" class="mainImage" /><!-- <div class="mainGloss"></div> --></a></span><p class="title"><a href="/shows/' + soy.$$escapeHtml(countData75.target.curie) + '">' + soy.$$escapeHtml(countData75.target.title) + '</a><span class="watches">(' + soy.$$escapeHtml(countData75.count) + ' watches)</span></p></li>' : '');
    }
  } else {
    for (var i90 = 0; i90 < 4; i90++) {
      output.append('<li><div class="picture mainImage emptyAvatar" style="width:150px;height:84px;"></div></li>');
    }
  }
  output.append('</ul></div>');
  if (!opt_sb) return output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.widgets.largeConsumes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="topList module" style="width:360px;"><ul><h2>Recently gawped</h2>');
  var consumptionList96 = opt_data.recentConsumptions;
  var consumptionListLen96 = consumptionList96.length;
  if (consumptionListLen96 > 0) {
    for (var consumptionIndex96 = 0; consumptionIndex96 < consumptionListLen96; consumptionIndex96++) {
      var consumptionData96 = consumptionList96[consumptionIndex96];
      output.append('<li><span class="picture"><a href="/', soy.$$escapeHtml(consumptionData96.user.screenName), '"><img src="', soy.$$escapeHtml(consumptionData96.user.largerProfileImage), '" class="largeProfileImage" /></a></span><p class="title"><a href="/', soy.$$escapeHtml(consumptionData96.user.screenName), '">', soy.$$escapeHtml(consumptionData96.user.fullName), '</a><span class="watches">(', soy.$$escapeHtml(consumptionData96.ago), ')</span></p></li>');
    }
  } else {
    for (var i109 = 0; i109 < 4; i109++) {
      output.append('<li><div class="picture mainImage emptyAvatar" style="width:150px;height:84px;"></div></li>');
    }
  }
  output.append('</ul></div>');
  if (!opt_sb) return output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.widgets.topConsumers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="topConsumers module"><ul class="topConsumers"><h2>Top Gawpers</h2>');
  var consumerList115 = opt_data.consumers;
  var consumerListLen115 = consumerList115.length;
  if (consumerListLen115 > 0) {
    for (var consumerIndex115 = 0; consumerIndex115 < consumerListLen115; consumerIndex115++) {
      var consumerData115 = consumerList115[consumerIndex115];
      output.append('<li class="consumer"><div class="avatar"><a href="/', soy.$$escapeHtml(consumerData115.user.screenName), '"><img src="', soy.$$escapeHtml(consumerData115.user.profileImage), '" class="icon" /></a><!-- <div class="gloss"></div> --></div></li>');
    }
  } else {
    for (var i122 = 0; i122 < 10; i122++) {
      output.append('<li><div class="emptyAvatar"></div></li>');
    }
  }
  output.append('</ul></div>');
  if (!opt_sb) return output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.widgets.loginOrSignUp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="loginOrSignUp" class="module" style="width: 180px; margin-top: 50px;">', (opt_data.currentUserDetails && opt_data.currentUserDetails.screenName) ? '<p class="joinus"><a href="/' + soy.$$escapeHtml(opt_data.currentUserDetails.screenName) + '" class="biglink">Your Profile</a>.' + ((opt_data.currentUserDetails.profileImage) ? '<div class="joinusPic"><a href="/' + soy.$$escapeHtml(opt_data.currentUserDetails.screenName) + '"><img src="' + soy.$$escapeHtml(opt_data.currentUserDetails.profileImage) + '" class="icon" /></a></div>' : '') + '</p>' : '<p class="joinus"><a href="/login/twitter?continueTo=/" class="biglink">Login</a><span class="or clearfix">or</span><a href="/invites" class="biglink">Request An Invite</a></p>', '<div class="clearfix"></div>', (opt_data.currentContent) ? '<p class="joinus" style="margin-top: 50px;"><a href="#" class="biglink" id="gawp-this">Gawp This!</a></p><script type="text/javascript">\n            $(document).ready(function() {\n                $(\'#gawp-this\').click(function(event) {\n                    triggerBookmarklet(\'' + soy.$$escapeHtml(opt_data.currentContent) + '\');\n                    return false;\n                });\n            });\n            </script>' : '<p class="joinus" style="margin-top: 50px;"><a href="/about" class="biglink">About Gawp</a></p>', '</div>');
  if (!opt_sb) return output.toString();
};
