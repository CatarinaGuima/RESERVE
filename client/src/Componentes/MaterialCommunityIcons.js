import { AntDesign, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export function IconHome() {
    return (
      <AntDesign name="home" size={28} color="black" />
    );
  }
  
  export function IconAppointment() {
    return (
      <MaterialCommunityIcons name="calendar-clock" size={28} color="black" />
    );
  }
  
  export function IconProfile() {
    return (
      <Entypo name="plus" size={34} color="black" />
    );
  }
  
  export function IconSettings() {
    return (
      <FontAwesome name="search" size={26} color="black" />
    );
  }