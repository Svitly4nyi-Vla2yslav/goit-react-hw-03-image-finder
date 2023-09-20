
import React, { Component } from 'react'
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
export class Searchbar extends Component {
    state = {
        search: '',
    }
    handleChange = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.search.trim() === '') {
            toast.error('Please enter your search query!🙏')
            return;
        }
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' })
    }

    render() {
        return (
            <header onSubmit={this.handleSubmit} class="searchbar">
                <form class="form">
                    <button
                        type="submit"
                        class="button"
                    >
                        <ImSearch style={{ marginRight: 8 }} />
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        name='search'
                        value={this.state.search}
                        onChange={this.handleChange}
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}