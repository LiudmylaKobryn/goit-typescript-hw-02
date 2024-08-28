import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues: FormValues = {
    query: "",
  };

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    setQuery(values.query);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Search images and photos"
            type="text"
          />
          <button className={s.submitBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
