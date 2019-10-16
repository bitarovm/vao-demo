import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


const DogForm = (props) => {
  const {
    dogData,
    isEditing,
    fields,
  } = props;
  
  const handleChange = (event) => {

  };

  return (
    <form>
      <div className="dog-form">
        <div className="dog-form__image"></div>
        
        <div className="dog-form__data">

            <div className="dog-form__param">
              <label className="dog-form__label">Имя</label>
              {
                isEditing
                  ? <input type='text' name={'name'} value={dogData.name} onChange={handleChange} />
                  : <label>{dogData.name}</label> 
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Год рождения</label>
              {
                isEditing
                  ? <input type='text' name={'birthday'} value={dogData.birthday} onChange={handleChange} />
                  : <label>{dogData.birthday}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Пол</label>
              {
                isEditing
                  ? <select name={'sex'} value={dogData.sex} onChange={handleChange}>
                      <option value={'male'}>мужской</option>
                      <option value={'female'}>женский</option>
                    </select>
                  : <label>{dogData.sex}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Ряд</label>
              {
                isEditing
                  ? <input type='text' name={'row'} value={dogData.row} onChange={handleChange} />
                  : <label>{dogData.row}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Вольер</label>
              {
                isEditing
                  ? <input type='text' name={'avairy'} value={dogData.avairy} onChange={handleChange} />
                  : <label>{dogData.avairy}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Ссылка</label>
              {
                isEditing
                  ? <input type='text' name={'catalogLink'} value={dogData.catalogLink} onChange={handleChange} />
                  : <a href={dogData.catalogLink}>{dogData.catalogLink}</a>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">ИД</label>
              {
                isEditing
                  ? <input type='text' name={'chipId'} value={dogData.chipId} onChange={handleChange} />
                  : <label>{dogData.chipId}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Гуляет</label>
              {
                isEditing
                  ? <select name={'isWalking'} value={dogData.isWalking} onChange={handleChange}>
                      <option value={'true'}>да</option>
                      <option value={'false'}>нет</option>
                    </select>
                  : <label>{String(dogData.isWalking)}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Дата вылова</label>
              {
                isEditing
                  ? <input type='text' name={'shelterDay'} value={dogData.shelterDay} onChange={handleChange} />
                  : <label>{dogData.shelterDay}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Статус</label>
              {
                isEditing
                  ? <select name={'status'} value={dogData.status} onChange={handleChange}>
                      <option value={'healthy'}>healthy</option>
                      <option value={'hospice'}>hospice</option>
                      <option value={'insulator'}>insulator</option>
                      <option value={'supervised'}>supervised</option>
                      <option value={'dead'}>dead</option>
                    </select>
                  : <label>{dogData.status}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Группа выгула</label>
              {
                isEditing
                  ? <select name={'walkingGroup'} value={dogData.walkingGroup} onChange={handleChange}>
                      <option value={'1'}>1</option>
                      <option value={'2'}>2</option>
                      <option value={'3'}>3</option>
                      <option value={'4'}>4</option>
                      <option value={null}>none</option>
                    </select>
                  : <label>{dogData.walkingGroup}</label>
              }
            </div>

            <div className="dog-form__param">
              <label className="dog-form__label">Описание</label>
              {
                isEditing
                  ? <textarea name={'description'} value={dogData.description} onChange={handleChange} />
                  : <label>{dogData.description}</label>
              }
            </div>

        </div>
      </div>
    </form>

  );
};

DogForm.propTypes = {
  dogData: PropTypes.object,
  isEditing: PropTypes.bool,
  fields: PropTypes.array,
};

export default DogForm;