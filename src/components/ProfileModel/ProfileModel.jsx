import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modelOpend,setmodelOpend}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {modelOpend}
      onClose ={()=>setmodelOpend(false)}
    >
      <form className='infoForm'>
          <h3>Your Information</h3>
          <div>
              <input type="text" className="infoInput" name="First name" placeholder='First name'/>
              <input type="text" className="infoInput" name="Last name" placeholder='Last name'/>
          </div>
          <div>
               <input type="text" className="infoInput" name="Works at" placeholder='Works at'/>
          </div>
          <div>
              <input type="text" className="infoInput" name="LivesIn" placeholder='LivesIn'/>
              <input type="text" className="infoInput" name="Contry" placeholder='Country'/>
          </div>
          <div>
               <input type="text" className="infoInput" name="RelationShip status" placeholder='RelationShip'/>
          </div>
          <div>
            Profile Image
            <input type="file" name='profileImg' />
            Cover Image
            <input type="file" name='coverImg' />
          </div>
          <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModel;