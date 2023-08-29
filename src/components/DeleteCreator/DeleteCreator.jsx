import supabase from '../../client';
import "./DeleteCreatorStyles.css"
import '@picocss/pico';

const DeleteCreator = (props) => {
    const { showModal, onCancel, id } = props;

    async function removeCreator(id) {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id)

        window.location.href = '/';
    }

    return (
        showModal && (
            <dialog open>
                <article>
                    <h3>DELETE CREATOR</h3>
                    <p>
                        Are you sure you want to delete this creator???
                    </p>
                    <footer className="footer">
                        <a
                            href="#confirm"
                            role="button"
                            style={{ backgroundColor: "#db3434" }}
                            onClick={() => removeCreator(id)}
                        >
                            <h4>
                                DELETE
                            </h4>

                        </a>
                        <a
                            href="#cancel"
                            role="button"
                            style={{ backgroundColor: "#3b8adf" }}
                            onClick={onCancel}
                        >
                            <h4>
                                CANCEL
                            </h4>
                        </a>

                    </footer>
                </article>
            </dialog>
        )

    )
}

export default DeleteCreator