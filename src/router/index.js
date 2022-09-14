import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding";
import DataBindingHtml from "@/views/DataBindingHtml";
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingInputNumber from "@/views/DataBindingInputNumber";
import DataBindingInputTextarea from "@/views/DataBindingInputTextarea";
import DataBindingInputSelect from "@/views/DataBindingInputSelect";
import DataBindingInputCheckbox from "@/views/DataBindingInputCheckbox";
import DataBindingInputRadio from "@/views/DataBindingInputRadio";
import DataBindingInputImg from "@/views/DataBindingInputImg";
import DataBindingInputButton from "@/views/DataBindingInputButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingStyle from "@/views/DataBindingStyle";
import DataBindingList from "@/views/DataBindingList";
import DataBindingVIf from "@/views/DataBindingVIf";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import EventKey from "@/views/EventKey";
import ComputedExam from "@/views/ComputedExam";
import DataBindingList2 from "@/views/DataBindingList2";
import NestedComponent from "@/components/NestedComponent";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingInputTextarea',
    name: 'DataBindingInputTextarea',
    component: DataBindingInputTextarea
  },
  {
    path: '/databindingInputSelect',
    name: 'DataBindingInputSelect',
    component: DataBindingInputSelect
  },
  {
    path: '/databindingInputCheckbox',
    name: 'DataBindingInputCheckbox',
    component: DataBindingInputCheckbox
  },
  {
    path: '/databindingInputRadio',
    name: 'DataBindingInputRadio',
    component: DataBindingInputRadio
  },
  {
    path: '/databindingInputImg',
    name: 'DataBindingInputImg',
    component: DataBindingInputImg
  },
  {
    path: '/databindingInputButton',
    name: 'DataBindingInputButton',
    component: DataBindingInputButton
  },
  {
    path: '/databindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingStyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/databindingVIf',
    name: 'DataBindingVIf',
    component: DataBindingVIf
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventKey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/computedExam',
    name: 'ComputedExam',
    component: ComputedExam
  },
  {
    path: '/computedExam',
    name: 'ComputedExam',
    component: ComputedExam
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
