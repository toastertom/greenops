angular.module('green-ops').service('servicesSvc', function () {

var services = [
  {
    title: 'Lawn Service',
    image: './images/grass.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Landscaping Design',
    image: './images/Landscape-Designs1.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Yard Work',
    image: './images/yardwork1.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Snow Removal',
    image: './images/snowworker.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Leaf Removal',
    image: './images/worker3.jpeg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Junk Removal',
    image: './images/junk.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Tree Removal',
    image: './images/treeremoval.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Sod Instlation',
    image: './images/worker4.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  },
  {
    title: 'Christmas Lights Installation',
    image: './images/winterlights.jpg',
    desc: 'Lorem ipsum dolor sit amet, vis einibh fierent, eros evertitur mea eu. At quem legimus vix. Dolorum vituperata cused,utinam convenire ex sed, vix et dolore copiosae. '
  }
];

this.getData = function () {
  return services;
};

});
